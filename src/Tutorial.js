import Table from 'react-bootstrap/Table';
import { ArrowLeftCircleFill,ArrowUpCircleFill,ArrowRightCircleFill,ArrowDownCircleFill } from 'react-bootstrap-icons';
import "./Tutorial.css"
export default function Tutorial(){

    return(
        <div className="tutorial" width="50%">
			<Table striped bordered hover variant="dark" className='table'>
			<thead>
				<tr>
					<th>按鍵</th>
					<th>用途</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						方向鍵
					</td>
					<td>
						輸入<ArrowUpCircleFill className="arrow up"/><ArrowDownCircleFill className="arrow down"/><ArrowLeftCircleFill className="arrow left"/><ArrowRightCircleFill className="arrow right"/>
					</td>
				</tr>
                <tr>
					<td>
                        退格 BackSpace
					</td>
					<td>
						刪除最後一個
					</td>
				</tr>
                <tr>
					<td>
                        Enter
					</td>
					<td>
						整行刪除
					</td>
				</tr>
                <tr>
					<td>
                        直接點選符號
					</td>
					<td>
						刪除特定符號
					</td>
				</tr>

			</tbody>
			</Table>
		</div>
    )
}