import styles from '@/styles/Home.module.css'

function About(){
    return (
        <div className={styles.container}>
    <div class="topnav">
        <a href="/" class="Active">Home</a>
        <a href="/about" class="Active">About</a>
        <a href="/contact" class="Acive">Contact</a>
      </div>
    
    <div>
        <h1>Personal Details</h1>
        <p>Full Name: Bukhobethu Mkona</p>
        <p>ID Number: 9810245685089</p>
        <p>Gender: Male</p>
        <p>Languages: English, IsiXhosa</p>

        <br></br>

        <h1>Highest Qualification</h1>
        <p>Institution Name: Walter Sisulu University</p>
        <p>Qualification Name: National Diploma in Information Technology</p>
        <p>Graduation Year: 2022</p>

        <br></br>

        <h1>Previous Experience</h1>
        <p>Company Name: CBT Connect</p>
        <p>Position: Software Developer Intern</p>
        <p>Start Date: July 2022 - To date</p>

        <br></br>

        <h1>Skills</h1>
        <p>Software Development</p>
        <p>React/AngularJS, TypeScript, HTML, CSS</p>
        <p>Firebase</p>
        <p>Documentation</p>
        <p>Creating User stories</p>
        <p>Designing ERDs</p>
        
        </div>
</div>
    )
}

export default About 