import { makeActionCreator, makeConstantCreator } from '../../Utils/Utils';

export const AppTypes = makeConstantCreator('GO_TO_INTRO');

export const goToIntro = () => makeActionCreator(AppTypes.GO_TO_INTRO);
