import { LAPTOP_FRAGMENT } from "./Fragments";
import { GET_LAPTOPS } from "./Queries";
import { saveLaptops, restoreLaptops } from "./Offline";

export const defaults = {
  laptops: restoreLaptops()
};
export const typeDefs = [
  `
    schema {
        query: Query
        mutation: Mutation
    }
    type Query {
        laptops: [Laptop]!
        laptop(id: Int!): Laptop
    }
    type Mutation{
        createLaptop(
        image: String!
        name: String!
        brand: String!
        price: String!,
        inch: String!,
        weight: String!,
        processor: String!,
        memory: String!,
        graphics: String!,
        storage: String!,
        display: String!,
        usb: String!,
        webcam: String!,
        purpose: String!,
        width: String!,
        height: String!,
        two_in_one: String!,
        os: String!,
        panel: String!,
        ppi: String!,
        ratio: String!,
        multi_touch: String!,
        front_cam: String!,
        back_cam: String!,
        pen: String!,
        item: String!
      ): Laptop
        deleteLaptop(id: Int!, image: String, name: String): Laptop
    }
    type Laptop{
        id: Int!
        image: String!
        name: String!
        brand: String!
        price: String!,
        inch: String!,
        weight: String!,
        processor: String!,
        memory: String!,
        graphics: String!,
        storage: String!,
        display: String!,
        usb: String!,
        webcam: String!,
        purpose: String!,
        width: String!,
        height: String!,
        two_in_one: String!,
        os: String!,
        panel: String!,
        ppi: String!,
        ratio: String!,
        multi_touch: String!,
        front_cam: String!,
        back_cam: String!,
        pen: String!,
        item: String!
    }
    `
];

export const resolvers = {
  Query: {
    laptops: async (_, variables, { cache }) => {
      const id = cache.config.dataIdFromObject({
        __typename: "Laptop",
        id: variables.id
      });
      const laptop = cache.readFragment({ fragment: LAPTOP_FRAGMENT, id });
      return await laptop;
    }
  },

  Mutation: {
    createLaptop: (
      _,
      {
        image,
        name,
        brand,
        price,
        inch,
        weight,
        processor,
        memory,
        graphics,
        storage,
        display,
        usb,
        webcam,
        purpose,
        width,
        height,
        two_in_one,
        os,
        panel,
        ppi,
        ratio,
        multi_touch,
        front_cam,
        back_cam,
        pen,
        item
      },
      { cache }
    ) => {
      const { laptops } = cache.readQuery({ query: GET_LAPTOPS });
      const newLaptop = {
        __typename: "Laptop",
        image,
        name,
        brand,
        price,
        inch,
        weight,
        processor,
        memory,
        graphics,
        storage,
        display,
        usb,
        webcam,
        purpose,
        width,
        height,
        two_in_one,
        os,
        panel,
        ppi,
        ratio,
        multi_touch,
        front_cam,
        back_cam,
        pen,
        item,
        id: laptops.length ? laptops[0].id + 1 : 0
      };
      for (var l in laptops) {
        if (newLaptop.name === laptops[l].name) {
          alert("안돼 돌아가");
          return;
        }
      }
      if (laptops.length + 1 <= 4) {
        cache.writeData({
          data: {
            laptops: [newLaptop, ...laptops]
          }
        });
      } else {
        alert("더 못담아 안돼");
      }
      saveLaptops(cache);
      return newLaptop;
    },
    deleteLaptop: (_, { id }, { cache }) => {
      const { laptops } = cache.readQuery({ query: GET_LAPTOPS });
      const updateLaptop = laptops.filter(function(laptop) {
        return laptop.id !== id;
      });
      const updatedLaptop = cache.writeData({
        data: { laptops: [...updateLaptop] }
      });
      saveLaptops(cache);
      return updatedLaptop;
    }
  }
};
