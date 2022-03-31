import { createStore } from "redux";

/**
 * @todo : Ajouter les reducer
 */
import reducers from "../../reducers";

export const store = createStore(reducers)