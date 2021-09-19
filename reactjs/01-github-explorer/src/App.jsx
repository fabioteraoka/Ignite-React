import { Counter } from './componente/Counter'
import { RepositoryList } from './componente/RepositoryList'
import './styles/global.scss'

export function App() {
    return(
    <> 
        <RepositoryList/>
        <Counter/>
    </>
    )
}