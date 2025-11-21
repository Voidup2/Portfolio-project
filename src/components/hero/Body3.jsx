import './Body3.css';
const Body3 = () => {
    const edu = [
        {
            id:1,
            date:'2018-2019',
            name:'10th Standard - ICSE Board',
            type:"St. Joseph's School",
            location:'Banka, Bihar',
            description:'Marks Obtained: 92.33%',
            major:'(Physics, Chemistry, Mathematics, Biology, English, Commerce)'
        },
        {
            id:2,
            date:'2020-2021',
            name:'12th Standard - CBSE Board',
            type:'Navyug Vidyalaya',
            location:'Bhagalpur, Bihar',
            description:'Marks Obtained: 85.00%',
            major:'(Physics, Chemistry, Mathematics, Physical Education, English)'
        },
        {
            id:3,
            date:'2022-Present',
            name:'Bachelors in Computer Science',
            type:'ITER, SOA University',
            location:'Bhubaneswar, Odisha',
            description:'Marks Obtained (Till 6th Sem): 8.04 CGPA',
            major:'(Computer Architecture, DSA, DBMS, ML, Cloud Computing)'

        },
    ];
    return (
        <>
        <div className="main-body" id='education-section'>
            <h2>Academics</h2>
            {edu.map(education => (
            <div className='edu-card' key={education.id}>
                <div className='edu-detail'>
                    <p className='edu-date'>{education.date}</p>
                    <div className='uni-info'>
                        <p>{education.name}</p>
                        <p>{education.type}</p>
                        <p>{education.location}</p>
                    </div>
                </div>
            <div className='edu-dis'>
                <p>{education.description}</p>
                <p>{education.major}</p>
            </div>
            </div>
            ))}
        </div>
        </>
    );
}
export default Body3;