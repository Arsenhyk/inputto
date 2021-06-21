


export const header = theme => ({

    root: {
        flexGrow: 1,
        display: 'block', 
    },
    logo: {
        margin: 0
      },
      search: {
        marginLeft: theme.spacing(1)
      },
      title: {
        flexGrow:1
      }

})

//style

export const useStyles = theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
});

export const formStyle = (theme) => ({
  rootForm: {
    backgroundColor: '#FFFFFF',
    width: '818px',
    height: '604px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 0,
    padding: 0,
    marginTop: theme.spacing(4),

  },

  forms:{
    
    marginTop: theme.spacing(4),

  },

  textForm:{
    width: '360px',
    height: '56px',
    marginTop: theme.spacing(2),
  }
 
});


