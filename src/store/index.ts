import { Store } from 'react-stores';


export interface IPersonalInfosState {
    sample: string,
}

export const personalInfos = new Store<IPersonalInfosState>({
    sample: ""
});
