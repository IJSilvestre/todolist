import { Image, StyleSheet, Text, View } from "react-native";
import axios from "axios";
import React from "react";

import PeopleList from "../components/PeopleList";

export default class PeaplePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pessoas: [
        {
          gender: "male",
          name: {
            title: "Mr",
            first: "Xenócrates",
            last: "Lima",
          },
          location: {
            street: {
              number: 9607,
              name: "Rua São Paulo ",
            },
            city: "Rio Grande",
            state: "São Paulo",
            country: "Brazil",
            postcode: 82467,
            coordinates: {
              latitude: "64.4215",
              longitude: "-22.6226",
            },
            timezone: {
              offset: "+6:00",
              description: "Almaty, Dhaka, Colombo",
            },
          },
          email: "xenocrates.lima@example.com",
          login: {
            uuid: "f8cfcbfc-57ed-4717-9322-e377d255a03d",
            username: "blackdog927",
            password: "carman",
            salt: "uC6ZEfDv",
            md5: "d24b5597051bc23d6149f50b1ace5d97",
            sha1: "6de235cf7d1c0c3c26add274d24f53a6e2297550",
            sha256:
              "0933569ee5dd1c31220268a91c458c87baa45c83b88722739cccaf7d9566b78b",
          },
          dob: {
            date: "1956-10-20T07:08:27.202Z",
            age: 67,
          },
          registered: {
            date: "2011-10-17T03:26:16.821Z",
            age: 12,
          },
          phone: "(81) 3360-2800",
          cell: "(71) 3005-0267",
          id: {
            name: "CPF",
            value: "500.192.350-34",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/47.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/47.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/47.jpg",
          },
          nat: "BR",
        },
        {
          gender: "male",
          name: {
            title: "Mr",
            first: "Édi",
            last: "Moraes",
          },
          location: {
            street: {
              number: 4789,
              name: "Rua Vinte de Setembro",
            },
            city: "Itapetininga",
            state: "Amapá",
            country: "Brazil",
            postcode: 65428,
            coordinates: {
              latitude: "-86.1251",
              longitude: "-158.3916",
            },
            timezone: {
              offset: "+3:30",
              description: "Tehran",
            },
          },
          email: "edi.moraes@example.com",
          login: {
            uuid: "c1400813-ab91-403f-8581-5747fa97e619",
            username: "angrypanda768",
            password: "charisma",
            salt: "9GY905qv",
            md5: "21864e4716307361e126a9075d00df5f",
            sha1: "edccf828930f201dba52e8ae2696b70a1cd4674c",
            sha256:
              "8f408d446f22cf02e9ce5d09228a2ddcfd04139564360a1863c40666bafc3c34",
          },
          dob: {
            date: "1975-10-12T12:29:28.397Z",
            age: 48,
          },
          registered: {
            date: "2011-06-29T10:38:25.584Z",
            age: 12,
          },
          phone: "(61) 8980-7532",
          cell: "(72) 1481-0810",
          id: {
            name: "CPF",
            value: "667.943.725-50",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/12.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/12.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/12.jpg",
          },
          nat: "BR",
        },
        {
          gender: "male",
          name: {
            title: "Mr",
            first: "Erik",
            last: "Costa",
          },
          location: {
            street: {
              number: 3596,
              name: "Rua São Paulo ",
            },
            city: "Colombo",
            state: "Rio de Janeiro",
            country: "Brazil",
            postcode: 82483,
            coordinates: {
              latitude: "86.6236",
              longitude: "5.9877",
            },
            timezone: {
              offset: "+4:30",
              description: "Kabul",
            },
          },
          email: "erik.costa@example.com",
          login: {
            uuid: "dffe4530-bb87-4292-aed1-b854b326e20e",
            username: "yellowelephant536",
            password: "gore",
            salt: "RR7i5ruD",
            md5: "085daeaec12f9f666d9a3d2200a08b07",
            sha1: "845a25ac03d349001bf17146615d12d266dbb194",
            sha256:
              "d970bdd73e077b031d9693471eca2093eb198a9dbf0f67ea3ea81da083daf2cf",
          },
          dob: {
            date: "1979-08-19T22:20:54.718Z",
            age: 44,
          },
          registered: {
            date: "2010-12-12T09:12:25.671Z",
            age: 13,
          },
          phone: "(01) 8105-6197",
          cell: "(78) 3584-4468",
          id: {
            name: "CPF",
            value: "059.135.761-76",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/91.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/91.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/91.jpg",
          },
          nat: "BR",
        },
        {
          gender: "female",
          name: {
            title: "Mrs",
            first: "Lohana",
            last: "Martins",
          },
          location: {
            street: {
              number: 4955,
              name: "Rua Carlos Gomes",
            },
            city: "Itaquaquecetuba",
            state: "Distrito Federal",
            country: "Brazil",
            postcode: 90557,
            coordinates: {
              latitude: "-68.2118",
              longitude: "-160.7886",
            },
            timezone: {
              offset: "-2:00",
              description: "Mid-Atlantic",
            },
          },
          email: "lohana.martins@example.com",
          login: {
            uuid: "aabf75c4-881a-4152-a5c3-bcbbf2e4576f",
            username: "goldengoose929",
            password: "zhai",
            salt: "6eKKxm0b",
            md5: "efb2ee785434c346361ec11d573f009e",
            sha1: "1d07c00afa20eda6d0362f7c4dd43c1dcfffbbd2",
            sha256:
              "8d5a37ae3802e9f188b161b874eb1a253739cf3520503b6709434ca765062dec",
          },
          dob: {
            date: "1996-09-18T17:18:19.822Z",
            age: 27,
          },
          registered: {
            date: "2005-07-26T09:49:57.547Z",
            age: 18,
          },
          phone: "(49) 8512-0700",
          cell: "(63) 7190-8040",
          id: {
            name: "CPF",
            value: "892.458.921-89",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/20.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/20.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/20.jpg",
          },
          nat: "BR",
        },
        {
          gender: "male",
          name: {
            title: "Mr",
            first: "Aquino",
            last: "Lima",
          },
          location: {
            street: {
              number: 1758,
              name: "Rua Santo Antônio ",
            },
            city: "Itabira",
            state: "Piauí",
            country: "Brazil",
            postcode: 47858,
            coordinates: {
              latitude: "-43.2285",
              longitude: "-5.5836",
            },
            timezone: {
              offset: "+5:45",
              description: "Kathmandu",
            },
          },
          email: "aquino.lima@example.com",
          login: {
            uuid: "96e12e10-8a2f-4bbd-a8d6-679e09e259ba",
            username: "heavyfish562",
            password: "notnow",
            salt: "00eaTO9Q",
            md5: "f0f347c6a7846235e8bfe494fe92b919",
            sha1: "33d7c47e96e2d87ee7975a504f98e51e1f0e0ebe",
            sha256:
              "fdcf6d332902257e4b49316d6c99cb907df8a42d41f48055d2a47b7fe0ee3565",
          },
          dob: {
            date: "1970-12-10T08:23:54.321Z",
            age: 53,
          },
          registered: {
            date: "2007-12-07T17:26:50.847Z",
            age: 16,
          },
          phone: "(72) 0126-5825",
          cell: "(44) 5536-9627",
          id: {
            name: "CPF",
            value: "694.920.180-01",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/28.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/28.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/28.jpg",
          },
          nat: "BR",
        },
      ],
    };
  }

  // componentDidMount() {
  //   axios.get("https://randomuser.me/api/?nat=br&results=5").then((res) => {
  //     const { results } = res.data;
  //     this.setState({
  //       pessoas: results,
  //     });
  //   });
  // }

  render() {
    return (
      <View style={this.styles.container}>
        <View>
          <PeopleList
            pessoas={this.state.pessoas}
            onPressItem={(pageParams) =>
              this.props.navigation.navigate("PeapleDetails", pageParams)
            }
          />
        </View>
      </View>
    );
  }

  styles = StyleSheet.create({
    container: {
      flex:1,
      padding: 10,
      backgroundColor: "#ffffff",
    },
  });
}
