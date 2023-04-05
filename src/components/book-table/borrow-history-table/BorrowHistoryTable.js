import React, { useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getBorrowAction } from '../../../pages/burrow-history/borrowAction'

const BorrowHistoryTable = () => {
  const dispatch = useDispatch()
  const {user } = useSelector(state=>state.user)
  const {borrow } = useSelector(state=>state.borrow)


  useEffect(()=>{
    dispatch(getBorrowAction(user.uid),[dispatch, user.uid])
  })
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          
          <th>ThumbNail</th>
          <th>Title</th>
          <th>Borrowed Date</th>
          <th>Returning Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          borrow?.map(({bookName, BorrowedAt, returnedAt})=>(
            <tr>
          <td>{bookName}</td>
          <td>{new Date(returnedAt).toLocaleDateString()}</td>
          <td>{new Date(BorrowedAt).toLocaleDateString()}</td>
          <td><Button>Return</Button>></td>
        </tr>

          ))
        }
        
        
        
      </tbody>
    </Table>
  )
}

export default BorrowHistoryTable
