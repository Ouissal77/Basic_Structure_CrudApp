export default function EditStudent()  {
 return ( <div className="">
    <h2 className="mt-5"> Edit Student</h2>
    <form>
        <label htmlFor="">first name</label>
        <input type="text" name="firstName" id="firstName" required value={""}/>
        <div></div>
        <label htmlFor="">last name</label>
        <input type="text" name="lastName" id="lastName" required value={""}/>
         <div></div>
        <label htmlFor="">email </label>
        <input type="text" name="email" id="email" required value={""}/>
        <div></div>
        <label htmlFor="">departement </label>
        <input type="text" name="departement" id="departement" required value={""}/>
   
   
   
    </form>
  </div>);
};
