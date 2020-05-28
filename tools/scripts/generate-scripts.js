const cp = require('child_process');
const fs = require('fs');

const NUMBER_OF_LIBS = 15;
const NUMBER_OF_COMPONENTS = 20;

function generateReactLibs(appName) {
  const libNames = [];

  for (let i = 0; i < NUMBER_OF_LIBS; ++i) {
    libNames.push(`lib${i}`);
  }

  libNames.forEach((libName) => generateReactLib(libName));

  const imports = libNames
    .map(
      (l) => `import { React${capitalize(l)} } from "@cache-video/react/${l}";`
    )
    .join('\n');
  const instantiations = libNames
    .map((l) => `<React${capitalize(l)}></React${capitalize(l)}>`)
    .join('\n');

  fs.writeFileSync(
    `apps/${appName}/src/app/app.tsx`,
    `import React from 'react';
${imports}

export const App = () => {
  return <div>
    ${instantiations}
  </div>
}

export default App;`
  );

  function generateReactLib(libName) {
    cp.execSync(`nx g @nrwl/react:lib ${libName} --directory=react`);

    const componentNames = [];

    for (let i = 0; i < NUMBER_OF_COMPONENTS; ++i) {
      componentNames.push(`${libName}-component${i}`);
    }

    componentNames.forEach((componentName) => {
      cp.execSync(
        `nx g @nrwl/react:component ${componentName}  --project=react-${libName}`
      );

      const componentClass = componentClassName(componentName);
      fs.writeFileSync(
        `libs/react/${libName}/src/lib/${componentName}/${componentName}.spec.tsx`,
        `
        import React from 'react';
        import { render } from '@testing-library/react';

        import ${componentClass} from './${componentName}';

        describe('${componentClass}', () => {
          ${emptySpecs(componentClass)}
        });
        `
      );

      fs.writeFileSync(
        `libs/react/${libName}/src/lib/${componentName}/${componentName}.tsx`,
        `
        import React from 'react';
        import { SHARED_CONST } from '@cache-video/shared-utils'; 

        import './${componentName}.css';
        
        export const ${componentClass} = () => {
          return (
            <div>
              <h1>Welcome to lib0-component0 component! {SHARED_CONST}</h1>
            </div>
          );
        };
        
        export default ${componentClass};
        `
      );
    });

    const l = libName.charAt(0).toUpperCase() + libName.slice(1);
    const componentImports = componentNames
      .map((c) => {
        const cc = componentClassName(c);
        return `import {${cc}} from './${c}/${c}';`;
      })
      .join('\n');
    const componentInstantiations = componentNames
      .map((c) => {
        const cc = componentClassName(c);
        return `<${cc}></${cc}>`;
      })
      .join('\n');
    fs.writeFileSync(
      `libs/react/${libName}/src/lib/react-${libName}.tsx`,
      `
    import React from 'react';
    ${componentImports}
    export const React${l} = () => {
      return (
        <div>
          ${componentInstantiations}
        </div>
      );
    };

    export default React${l};
    `
    );

    function emptySpecs(componentClass) {
      let res = [];
      for (let i = 0; i < 100; ++i) {
        res.push(`
        it('should render successfully', () => {
          const { baseElement } = render(<${componentClass} />);
          expect(baseElement).toBeTruthy();
        });
        `);
      }
      return res.join('\n');
    }
  }

  function componentClassName(name) {
    const [libName, componentName] = name.split('-');
    const l = libName.charAt(0).toUpperCase() + libName.slice(1);
    const c = componentName.charAt(0).toUpperCase() + componentName.slice(1);
    return `${l}${c}`;
  }

  function capitalize(libName) {
    return libName.charAt(0).toUpperCase() + libName.slice(1);
  }
}

generateReactLibs('react-app1');
generateReactLibs('react-app2');
