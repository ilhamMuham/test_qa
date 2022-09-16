import { Provider } from 'react-redux'
import { PropTypes } from 'prop-types'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from '../../redux/store'

const Context = ({ children }) => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>{children}</PersistGate>
        </Provider>
    )
}

Context.propTypes = {
    children: PropTypes.any.isRequired,
}

export default Context
