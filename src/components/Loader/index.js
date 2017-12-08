import React from 'react'
import { CircularProgress } from 'material-ui/Progress'
import { withStyles } from 'material-ui/styles'

const styles = {
  root: {
    marginTop: '100px',
    textAlign: 'center'
  },
}

function Loader ({isLoading, children, classes}) {
  return (
    <div>
      {
        isLoading
        ? <div className={classes.root}><CircularProgress /></div>
        : children
      }
    </div>
  )
}

export default withStyles(styles)(Loader)
