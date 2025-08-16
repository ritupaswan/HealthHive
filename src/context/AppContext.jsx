import { createContext, useState, useEffect } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [appointments, setAppointments] = useState([]);

  // App start hone par user load karo
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Har baar user change hone par appointments load karo
  useEffect(() => {
    if (user) {
      const savedAppointments = localStorage.getItem(
        `appointments_${user.email}`
      );
      setAppointments(savedAppointments ? JSON.parse(savedAppointments) : []);
    } else {
      setAppointments([]);
    }
  }, [user]);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setAppointments([]);
    localStorage.removeItem("user");
  };

  const bookAppointment = (appointmentData) => {
    const updatedAppointments = [...appointments, appointmentData];
    setAppointments(updatedAppointments);

    if (user) {
      localStorage.setItem(
        `appointments_${user.email}`,
        JSON.stringify(updatedAppointments)
      );
    }
  };

  const value = {
    doctors,
    user,
    login,
    logout,
    appointments,
    bookAppointment,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
