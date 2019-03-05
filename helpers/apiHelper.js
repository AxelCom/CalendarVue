import axios from "axios";

export const createUser = (email, pass) => {
    return axios
        .post(
            "http://localhost:5000/signin",
            {
                email: email,
                pass: pass
            },
            { withCredentials: true }
        )
        .then(function(response) {
            console.log(response);
            return response;
        })
        .catch(function(error) {
            console.error(error);
            return error;
        });
};

export const seConnecter = (email, pass) => {
    return axios
        .post(
            "http://localhost:5000/login",
            {
                email: email,
                pass: pass
            },
            { withCredentials: true }
        )
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.error(error);
        });
};

export const addUnEvent = (idEvent, title, dateDebut, dateFin, description, mailUser) => {
  return axios.post(
    "http://localhost:5000/addEvent",
    {
      idEvent: idEvent,
      title: title,
      description: description,
      dateDebut: dateDebut,
      dateFin: dateFin,
      mailUser: mailUser
    },
    { withCredentials: true }
  );
};
export const deleteUnEvent = idEvent => {
  return axios.post(
    "http://localhost:5000/deleteEvent",
    {
      idEvent: idEvent
    },
    { withCredentials: true }
  );
};

export const getUnEvent = idEvent => {
    return axios.get(
        "http://localhost:5000/event",
        {
            params: {
                idEvent: idEvent
            }
        },
        { withCredentials: true }
    );
};
export const getAllEvents = mailUser => {
    return axios.get(
        "http://localhost:5000/events",
        {
            params: {
                mailUser: mailUser
            }
        },
        { withCredentials: true }
    );
};

