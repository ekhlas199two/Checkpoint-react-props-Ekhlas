import PropTypes from "prop-types";


function Profile (props) {
    const {fullName='',bio='',profession='',handleName}=props;
    return(
        <div>
        <h1 style={{color:"#4A5899", fontSize:'60px', paddingBottom:'5px'}}>I'm {fullName}.</h1>
        <h1 style={{color:"#C1B2AB", fontSize:'30px', paddingBottom:'5px'}}>I'm {profession}.</h1>
        <h1 style={{color:'lightblue',fontSize:'30px', paddingBottom:'5px'}}>and I {bio}.</h1>
        <a href='/' onLoad={()=>handleName(fullName)}>
           {props.children} 
        </a>
    </div>
    );
}


Profile.propTypes = {
    fullName:PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    fhandleName: PropTypes.func,
};

export default Profile;