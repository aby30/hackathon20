import React from "react";
import Router from 'next/router'
import styles from './style.module.scss';

class AdminLoginModule extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      bookingId: '',
      username: '', 
    };
  }

  componentDidMount() {
    
  }

  setInputVal = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  submit = () => {
    const { username  } = this.state;
    localStorage.setItem("username", username);
    Router.push("/chatListing");
  }

  render() {
    const { bookingId, username  } = this.state;
    return (
      <div className={styles.login}>
        <div className={styles.login__main}>
          <div className={styles.login__OrgTitle}>U2 Concert</div>
          <div className={styles.login__OrgSubTitle}>Organiser login</div>
          <div className={styles.login__inner}>

            <div className={styles.login__title}>
              Login to Chatroom
            </div>
            <div className={styles.login__subTitle}>
              Join others attending the event
            </div>
            {/* <div className={styles.login__inputLabel}>
              Enter Booking Id
            </div>
            <div className={styles.login__input}>
              <input type="text" name="bookingId" placeholder="Ex. BMS76719362" />
            </div> */}

            <div className={styles.login__inputLabel}>
              Enter organiser Id
            </div>
            <div className={styles.login__input}>
              <input type="text" name="username" placeholder="Organiser id" onChange={this.setInputVal} />
              {/* <div className={styles.login__inputInfo}>
                This user name will be visible to everyone in the chat.
              </div> */}
            </div>

            <div className={styles.Btn}>
              <button onClick={() => this.submit()} disabled={!username}>Login</button>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default AdminLoginModule;
