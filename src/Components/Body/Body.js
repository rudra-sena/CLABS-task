import './Body.css'
import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { appendSchema, removeSchema, updateSchema, updateSegment} from '../../Redux/schemaSlice'

const Body = () => {
    const [segmentName,setSegmentName]=useState('');

  const [localSchema,setLocalSchema] = useState([]);
  const fields = [{name:"First Name", id:"first_name"},
    {name:"Last Name", id:"last_name"},
    {name:"Gender", id:"gender"},
    {name:"Age", id:"age"},
    {name:"Account Name", id:"account_name"},
    {name:"City", id:"city"},{name:"State", id:"state"}  
  ]

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
                    {
                      fields.map(field =>{
                        return(
                          <>
                          {!selectedSchemaName.includes(field.name)&& <div id={field.id} onClick={(e)=>{add(e)}}>{field.name}</div>}
                          </>
                        )
                      }
                      )
                    }  
                    </div>
                </div>
        </div>
     );
}
 
export default Body;