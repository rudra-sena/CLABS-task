import './Body.css'
import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { appendSchema, removeSchema, updateSchema, updateSegment} from '../../Redux/schemaSlice'

const Body = () => {
    const [segmentName,setSegmentName]=useState('');

  const [localSchema,setLocalSchema] = useState([]);

  const dispatch=useDispatch();

    const dropDown=()=> {
    document.getElementById("dropDown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
      if (!event.target.matches('.dropdown-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
    const [selectedSchemaName,setSelectedSchemaName] = useState([]);  
    const addSchema=(e)=>{    
        
        setSelectedSchemaName((prevSchema)=>[...prevSchema,e.target.innerText])
  }
  

    const remSchema = (item) => {
      setSelectedSchemaName(selectedSchemaName.filter((ele)=>{return Object.values(item)[0]!==ele}))
      dispatch(removeSchema(item));
      setLocalSchema(localSchema.filter((ele)=>{return ele!==item}))
  }
  const add=(e)=>{
    const obj=new Object();
    obj[e.target.id]=e.target.innerText;
    setSelectedSchemaName((prevSchema)=>[...prevSchema,e.target.innerText]);
    setLocalSchema((prevSchema)=>[...prevSchema,obj]);
    dispatch(appendSchema(obj));
  }
  const {schema}=useSelector((state)=>state.schema);
  const {segment}=useSelector((state)=>state.schema);

  dispatch(updateSchema(localSchema));
  dispatch(updateSegment(segmentName));

    return ( 
        <div className="modal-body">
            
            <h4>Enter the name of the segment</h4>
            
                <input type="text"
                 className="segment-name"
                 placeholder='Name of the segment'
                 value={segmentName}
                 onChange={(e)=>setSegmentName(e.target.value)}
                 required
                />
                <h4>To save your segment, you need to add the schemas to build the query</h4>
                <div className="traits">
                    <span className="dot1"></span><span className="label">- User Traits</span>
                    <span className="dot2"></span><span className="label">- Group Traits</span>
                </div>
                { 
                     localSchema.map((item) =>{
                        
                        return (
                            <div className="selected-items">
                              <div className="field-name">{Object.values(item)[0]}</div>
                              <div className="remove" onClick={()=>{remSchema(item)}}>-</div>
                            </div>
                        )
                    })
                }
                <div className="dropdown">
                <button onClick={dropDown} className="dropdown-btn">
                        Add schema to segment 
                </button>
                    <div id="dropDown" className="dropdown-content">
                      {!selectedSchemaName.includes("First Name") && <div id="first_name" onClick={(e)=>{add(e)}}>First Name</div>}
                      {!selectedSchemaName.includes("Last Name") && <div id="last_name" onClick={(e) =>{add(e)}}>Last Name</div>}
                      {!selectedSchemaName.includes("Gender") && <div id="gender" onClick={(e) =>{add(e)}}>Gender</div>}
                      {!selectedSchemaName.includes("Age") &&  <div id="age" onClick={(e) =>{add(e)}}>Age</div>}
                      {!selectedSchemaName.includes("Account Name") &&  <div id="account_name" onClick={(e) =>{add(e)}}>Account Name</div>}
                      {!selectedSchemaName.includes("City") &&  <div id="city" onClick={(e) =>{add(e)}}>City</div>}
                      {!selectedSchemaName.includes("State") &&  <div id="state" onClick={(e) =>{add(e)}}>State</div>}
                    </div>
                </div>
        </div>
     );
}
 
export default Body;