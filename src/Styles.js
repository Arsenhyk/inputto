


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

  button: {
    marginRight: theme.spacing(3),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
});

export const formStyle = (theme) => ({
  

  forms:{
    
    marginTop: theme.spacing(4),

  },

  root: {
    
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '500px',

  },

  container: {

    height: '500px',
    marginLeft: theme.spacing(4),
  },

  imges: {

    width: '378px',
    height: '605px',
  
  },

  textForm:{
    width: '360px',
    height: '56px',
    marginTop: theme.spacing(3),
  },

  margin: {
    margin: theme.spacing(2),
  },
  
  textField: {
    width: '25ch',
  },

  fileForm:{
    width: '360px',
    height:' 140px',
    border: '1px dashed #1A73E8',
    borderRadius: '16px',
    marginTop: theme.spacing(8),
  },
  fileStyle:{
    width: '360px',
    height:' 140px',
    border: '1px dashed #1A73E8',
    borderRadius: '16px',
    marginTop: theme.spacing(8),
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'center',
  },

  errorIcons: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(40),
  },
  icoDown: {
    width: '24px',
    height:' 16px',
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
  }

  
 
});

