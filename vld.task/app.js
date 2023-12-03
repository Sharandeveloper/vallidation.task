import "./app.css";
import {useformik, formik, form, field} from 'formik';
import { signupvalidation } from "./signup vallidtion";


const intialvlaues = {
    name: "",
    email: "",
    password:"",
    cpassword: "",


}
  function app (){
    const {values, handleblur, handlechange, handlesubmit, errors} = useformik( {
        intialvalues: intialvalues,
        validationschema: signupvalidation,
        onsubmit: (values) => {
            console.log(values);
        }

    })
    
    return (
        <div classname="app">
            <formik 
            intialvalues={intialvlaues}
           validationschema={signupvalidation}   
            > 
            {({errors}) => (
            <form on submit= {handlesubmit}>
            
                <label htmlfor="name">
              <br/>
              <input type= "text" name="name" vlaue={values.name} 
              onblur={handleblur} onchange={handlechange}/>
              <br />
              <field type="text" name="name"></field>
              <br/>
              {errors.name  && <small>{errors.name}</small>}
              <br />
              <label htmlfor="email" value= {values.email} 
              onblur={handleblur} onchange={handlechange}>email</label>
              <br/>
              <field type="email" name="email"></field>

              <br/>
              {errors.email  && <small>{errors.email}</small>}

              <br/>
              <label htmlfor= "password" value= {values.password} 
              onblur={handleblur} onchange={handlechange}>password</label>
              <br />
              <field type="password" name="password"></field>

              <br />
              {errors.password && <small>{errors.password}</small>}
              <br/>
              <label htmlfor= "cpassword" value= {values.cpassword} 
              onblur={handleblur} onchange={handlechange}>cpassword</label>
              <br />
              <field type="cpassword" name="cpassword"></field>
              <br />
              {errors.cpassword && <small>{errors.cpassword}</small>}

              <br/>
              <label htmlfor= "submit" value =  {values.submit} 
              onblur={handleblur} onchange={handlechange}>submit</label>

                </label>
            </form>
            )}
            </formik>
            </div>
            
    );
  }
  export default app;

