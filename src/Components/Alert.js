// import React from 'react'

// function Alert() {
//   return (
//     <div>
//       <div class="alert alert-warning alert-dismissible fade show" role="alert">
//   <strong>Holy guacamole!</strong> You should check in on some of those fields below.
//   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
// </div>
import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
function Alertdemo() {
  return (
    <Stack sx={{ width: '50%' }} spacing={2}>
      <Alert variant="filled" severity="success">
        This is successfuly convert in Uppercase.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </Alert>
    </Stack>
  )
}

export default Alertdemo
//     </div>
// //   )
// }

// export default Alert
