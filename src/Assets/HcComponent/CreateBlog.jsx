import React, { useState } from "react";
import axios from "axios";
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


const CreateBlogPage = () =>{
    
    const [data, setData] = useState({
        title: "",
        password: "",
        content: "",
        image: "",
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
     
      const addback = async () => {
        // console.log("uim",data.image)
        // console.log(data);
        var formData = new FormData();
        formData.append('Title', data.title);
        formData.append('Password', data.password);
        formData.append('Content',data.content);
        formData.append('image', data.image);
        const resp = axios.post("http://localhost:5000/newroute",formData);
      };

      const InputEvent = (event) => {
        const { name, value } = event.target;
    
        // setData((preVal) => {
        //   return {
        //     ...preVal,
        //     [name]: value,
        //   };
        // });
        setData({...data,[name]:value});
      };

     const handlefile=(e)=>{
      console.log('img upload');
      console.log(e.target.files[0]);
      setData({ ...data, [e.target.name]: e.target.files[0]})

     }

     const formSubmit = (e) => {
        e.preventDefault();
        //addtolist(data);
      };
       
    return(
        <>
            <section className="container-fluid" id="contact-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 order-lg-4">
                            <h2>Create a Blog </h2>
                            <form className="row mb-5" onSubmit={formSubmit} encType="multipart/form-data" >
                                <div className="col-md-8 form-group">
                                    <label htmlFor="name">Title</label>
                                    <input type="text" className="form-control" id="name" name='title' placeholder="Enter Title" value={data.title} onChange={InputEvent}/>
                                </div>

                                <div className="col-md-8 form-group">
                                    <label htmlFor="pswrd">Password</label>
                                    <input type="text" className="form-control" id="password" aria-describedby="password" name='password' placeholder="Enter Password" value={data.password} onChange={InputEvent} />
                                </div>

                                <div className="col-md-8 form-group">
                                    <label htmlFor="pswrd">Content</label>
                                    <input type="text" className="form-control" id="content" name='content' aria-describedby="content" placeholder="Enter Content"  value={data.content}  onChange={InputEvent} />
                                </div>

                                <div className="col-md-12 form-group">
                                    <label htmlFor="subject">Image Upload</label>
                                    <input type="file" class="form-control-file" id="exampleFormControlFile1"  name='image'  onChange={handlefile} />
                                </div>
                                <div className="col-md-12 form-action">
                                    <button type="submit" className="btn-submit" onClick={addback} >Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    );
}

export default CreateBlogPage;