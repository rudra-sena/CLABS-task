import './Footer.css'
import { useSelector } from 'react-redux';

const Footer = (props) => {
    const {schema}=useSelector((state)=>state.schema);
    const {segment} = useSelector((state)=>state.schema);
    const cancel=props.props.cancel;
    const url="https://webhook.site/4e472110-ef38-4acb-8e99-87bdfb9baf8b";

    const serverRequest=new Object();
    serverRequest["segment_name"]=segment;
    serverRequest["schema"]=schema;
    const handleSubmit=()=>{
        if(segment===""){
            alert("Segment Name cannot be empty");
        }
        else if(!schema.length>0){
            alert("Please enter a valid schema")
        }
        else {
            fetch(url, {
                method: "POST",
                headers:{
                    'Content-Type': 'application/json',
                    'accept' : '*/*',
                    'accept-encoding' : 'gzip,deflate,br',
                    'Connection': 'keep-alive'
                },
                body: JSON.stringify(serverRequest)
            })
            .then(res=>{
                res.json()})
            .then(data=>{
                console.log(data);
            })
            .catch(err=>{
                console.log(err.message);
                console.log(JSON.stringify(serverRequest));
                alert("Failed to fetch. Check the console for details");
                cancel(false);
            });
        }
        
    }
    return ( 
        <div className='modal-footer'>
            <button className="save-schema" onClick={handleSubmit}>Save the segment</button>
            <button className="cancel-btn" onClick={()=>cancel(false)}>Cancel</button>
        </div>
     );
}
 
export default Footer;