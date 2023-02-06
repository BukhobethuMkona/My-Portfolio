import styles from '@/styles/Home.module.css'

function Contact(){
    return (
    <div className={styles.container}>
    <div class="topnav">
        <a href="/" class="Active">Home</a>
        <a href="/about" class="Active">About</a>
        <a href="/contact" class="Acive">Contact</a>
      </div>

      <div>
        <h1>Contact Details</h1>
        <p>Contact Number: 0743645054</p>
        <p>Alt Number: 0728212461</p>
        <p>Email address: bukho362@gmail.com</p>
        
    <br></br>

        <h1>Social media/Links</h1>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/bukhobethu-mkona-533672181/">Bukhobethu Mkona</a>
        </p>
        <p>GitHub: <a href="https://github.com/BukhobethuMkona">BukhobethuMkona</a>

        </p>

        </div>
    
</div>

    )    
}

export default Contact