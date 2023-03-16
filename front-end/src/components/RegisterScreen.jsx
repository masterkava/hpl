import 'bootstrap/dist/css/bootstrap.min.css';
import './RegisterScreen.css';
import { IoIosArrowDown } from "react-icons/io";


const RegisterScreen = () => {

    const karyakartas = [ "Santosh Sharma", "Mohit Darji", "Parag Thacker", "Akshay Bhatt", "Pritesh Darji"]

    return (

            <>
            <h1 class='reg__form' >Registration Form for HPL</h1>

            <section>
                <div className='basic_details__div' >
                    <h3>Basic Details</h3>
                    <form>
                        <div className='container__form' >  

                            <div className='fname__div' >
                                <label for="fname" className='fname__label' >First Name</label>
                                <input type="text" id="fname" name="firstname" placeholder="Enter First Name" />
                            </div>

                            <div className='lname__div' >
                                <label for="lname" className='' >Last Name</label>
                                <input type="text" id="lname" name="lastname" placeholder="Enter Last Name" />
                            </div>

                            <div className='slocation__div' >
                                <label for="slocation" >Sabha Location</label>
                                <select id="slocation" name="sabhalocation">
                                    <option className='dropdown__select' value=""> <span>Select Location</span></option>
                                    <option value="Tiles Factory">TF</option>
                                    <option value="Pleasant Park">PP</option>
                                    <option value="Ramdev Park">RP</option>
                                    <option value="Bhayandar East">ByE</option>
                                    <option value="Bhayandar West">ByW</option>
                                </select>
                            </div>

                            <div className='bdate__div' >
                                <label for="bdate" >Birth Date</label>
                                <input type="date" />
                            </div>

                            <div className='refname__div' >
                                <label for="refname" >Reference</label>
                                    <input class='input-field__ref' list='data' />
                                    <datalist id='data' >
                                        { karyakartas.map( (op) => <option>{op}</option> ) }
                                    </datalist>
                            </div>
                            <div className='ytype__div' >
                                <label for="ytype" >Yuvak Type</label>
                                <select id="ytype" name="yuvaktype">
                                    <option className='dropdown__select' value="">Select Yuvak Type</option>
                                    <option value="New">New</option>
                                    <option value="Existing">Existing</option>
                                    
                                </select>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </section>

            {/* Players details */}
            <section>
                <div className='players_details__div' >
                    <h3>Players Details </h3>
                    <form>
                        <div className='container__form' >  
                            <div className='gAt__div' >
                                <label for="gAt" >Good At</label>
                                <select id="gAt" name="goodat">
                                    <option className='dropdown__select' value=""> <span>Select</span></option>
                                    <option value="Batsman">Batsman</option>
                                    <option value="Bowler">Bowler</option>
                                    <option value="All Rounder">All Rounder</option>
                                    <option value="Wicket Keeper">Wicket Keeper</option>
                                </select>
                            </div>

                            <div className='hand__div' >
                                <label for="hand" >Hand</label>
                                <select id="hand" name="handed">
                                    <option className='dropdown__select' value=""> <span>Select</span></option>
                                    <option value="Batsman">Right</option>
                                    <option value="Bowler">Left</option>
                                    
                                </select>
                            </div>

                            
                            
                        </div>
                        
                    </form>
                </div>
            </section>

            </>
       
    )
}

export default RegisterScreen;
