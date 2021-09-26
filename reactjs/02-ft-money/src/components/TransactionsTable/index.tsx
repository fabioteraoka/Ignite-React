import { useEffect } from "react"
import { api } from "../../services/api"
import { Container } from "./styles"


export const TransactionsTable = () => {

    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
     },[])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Almoço de final de semana</td>
                        <td className="deposit">R$ 120,00</td>
                        <td>Almoço</td>
                        <td>20/06/2020</td>
                    </tr>
                    <tr>
                        <td>Almoço de final de semana</td>
                        <td className="deposit">R$ 120,00</td>
                        <td>Almoço</td>
                        <td>20/06/2020</td>
                    </tr>
                    <tr>
                        <td>Almoço de final de semana</td>
                        <td className="withdraw">-R$ 120,00</td>
                        <td>Almoço</td>
                        <td>20/06/2020</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}
