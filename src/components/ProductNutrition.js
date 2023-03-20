import { useOutletContext } from "react-router-dom";
import Table from 'react-bootstrap/Table';

function ProductNutrition() {
    const product = useOutletContext();
    const nutrition = product.nutrition;
    return ( 
        <Table className="table-nutrition">
        <thead>
            <tr>
            <th>Nutrient</th>
            <th>Value</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Protein</td>
            <td>{nutrition.protein}g</td>
            </tr>
            <tr>
            <td>Carbohydrates</td>
            <td>{nutrition.carbs}g</td>
            </tr>
            <tr>
            <td>Fat</td>
            <td>{nutrition.fat}g</td>
            </tr>
            <tr>
            <td>Salt</td>
            <td>{nutrition.salt}g</td>
            </tr>
        </tbody>
    </Table>
     );
}

export default ProductNutrition;