import React from 'react';
import renderer from 'react-test-renderer';
import { Comp } from './Comp';

describe('Test couple:', () => {
        const renderedValue =  renderer.create(<Comp text="Function Component" />).toJSON();
        //const renderedValue =  renderer.create(<Comp text="Function Component"  count={1}  />).toJSON();
        
        // it ('Check component:', () => {
        //     expect(renderedValue).toMatchSnapshot();
        // })
        
        it ('Check negative answer:', () => {
            expect(renderedValue.children).toContain('NO!');
        })
        
        it ('Check url disabled:', () => {
            expect(renderedValue.children).not.toContain('a href=""');
        });
    }
)

