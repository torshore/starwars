import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

jest.mock('react-redux', () => ({
    useDispatch: () => {},
    useSelector: () => ({
        characters: {},
        ships: {}
    })
}));

describe('<App />', () => {
    let appWrapper = '';

    beforeEach(() => {
        appWrapper = shallow(<App />, { disableLifecycleMethods: true });
    });

    afterEach(() => {
        appWrapper.unmount();
    });

    it('Expect to not log errors in console', () => {
        const spy = jest.spyOn(global.console, 'error');

        expect(appWrapper).not.toBeNull();
        expect(spy).not.toHaveBeenCalled();
    });

    it('Should render and match snapshot', () => {
        expect(appWrapper).toMatchSnapshot();
    });
});
