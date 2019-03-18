import compose from 'recompose/compose'
import { withProps, pure } from 'recompose'

import Users from '../../../components/Pages/Users/Desktop'

const mockData = [
  { id: 1, email: 'test123456789@test.com', name: 'Oleg', age: '25' },
  { id: 2, email: 'test@test.com', name: 'Oleg', age: '25' },
  { id: 3, email: 'test-test@test.com', name: 'Oleg', age: '25' },
  { id: 4, email: 'test-test-100500@test.com', name: 'Oleg', age: '25' },
  { id: 5, email: 'test-test@test.com', name: 'Oleg', age: '25' }
]

export default compose(
  withProps(() => ({ usersData: mockData })),
  pure
)(Users)
