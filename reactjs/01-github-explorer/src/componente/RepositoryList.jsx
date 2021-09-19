import { RepositoryItem } from './RepositoryItem'

const repository = {
    name: 'unform',
    description: 'React form library',
    link: 'https://github.com/unform/unform'
}

export const RepositoryList = () => {
    return (
        <section className="repository-list">
            <h1>Lista de repositorios</h1>

            <ul>
               <RepositoryItem repository={repository}/>
               <RepositoryItem repository={repository}/>
               <RepositoryItem repository={repository}/>
               <RepositoryItem repository={repository}/>
            </ul>            
        </section>
    )
}
