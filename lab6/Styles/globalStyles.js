import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  topView:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    top:40,
    maxHeight:'50%'
 },
  mcontainer:{
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    backgroundColor:"pink",
 },
 name : {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 5,       
    fontFamily: 'courier',
    alignItems:"flex-start"
 },
 image: {   
    flex:1,
    margin: 12,  
    height: 250, 
    width: 330,
    borderRadius: 10,
    justifyContent:"center",
    alignItems:"center",
    marginTop:-5
  },
  btnView: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16,
    flex: 1,
    maxHeight: '40%',
    maxWidth: '100%',
    backgroundColor:"",
    
  },
  btn:{
    backgroundColor: "pink",
    borderRadius: 10,
    alignItems: 'center',
    padding: 5,
    fontSize:25,
  },
  logo:{
    justifyContent:"flex-start",
    alignItems:"flex-end",
    borderRadius:10,
    width:70,
    height:70,
    marginRight:5    

  },
  hView:{
    height:'15%',
    width:'100%', 
    backgroundColor:'#C83A6C'
  },
  hitems:{
    flex:1,
    justifyContent:"flex-end",
    alignItems:"center", 
    flexDirection:"row"
  },
  pscroll:{
    flex:1, 
    justifyContent:"flex-start", 
    alignItems:"center"
  },
  pimage:{
    flexDirection:"space-between", 
    justifyContent:"center", 
    alignItems:"center"
  },
  pimagestyle:{
    width:150, 
    height:150, 
    marginTop:25
  },
  ptop:{
    backgroundColor:"pink", 
    borderRadius:10, 
    justifyContent:"center", 
    alignItems:"center", 
    marginTop:5
  },
  pname:{
    fontSize:20, 
    padding:5, 
    alignItems:"center"
  },
  pabout:{
    backgroundColor:"pink", 
    justifyContent:"center", 
    alignItems:"center", 
    width:200, 
    borderRadius:10
  }


});