import User from '../models/User';
import Category  from '../models/Category';
import TypeHospital from '../models/TypeHospitals';
import Hospital from '../models/Hospitals';

export const Users = [
    new User('1','nyira','2354672','21 langa cape town'),
    new User('2','nyira mwalila','235467243','24 langa cape town'),
    new User('3','mireille','2354672345','24 parkland cape town'),
    new User('4','nyira vigne','2354672342','25 wood cape town'),
];

export const Categories = [
    new Category('1','hospital'),
    new Category('2','clinics',),
];

export const TypeHospitals = [
    new TypeHospital('1','public'),
    new TypeHospital('2','private'),
];

export const Hospitals = [
    new Hospital('1','clinic langa','1','langa cape town'),
    new Hospital('2','DuNoon','2','DuNoon Cape town'),
];