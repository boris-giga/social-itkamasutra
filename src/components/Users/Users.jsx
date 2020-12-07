
import React from "react";
import styles from "./Users.module.css";
import { NavLink } from 'react-router-dom';

const avaurl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcdS2G0_159FyiX7C5I-ed1aw2Nj_R3t1P9g&usqp=CAU";


const Users = (props) => {
    
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    // let pages = Array(pagesCount).fill(null)
    let pages = []
    for ( let i=1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return (
      <div>
        <div className={styles.paginator}>
          {pages.map((p) => {
            return (
              <span
                onClick={(e) => props.onPageChanged(p)}
                className={props.currentPage === p && styles.selectedPage}
              >{` ${p} `}</span>
            );
          })}
        </div>
        {props.users.map((u) => (
          <div key={u.id} className={styles.userCard}>
            <span>
              <div>
                <NavLink to={`/profile/${u.id}`}>
                  <img
                    src={`https://robohash.org/${u.id}?set=set5&size=180x180` || avaurl}
                    className={styles.avatar}
                    alt="no avatar ):"
                  />
                </NavLink>
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>u.location.country</div>
                <div>u.location.city</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    ); 
}

export default Users;