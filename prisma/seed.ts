import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const petGenderMale = await prisma.petGender.create({
    data: {
      name: 'Macho',
      initials: 'M',
    },
  });

  const petGenderFemale = await prisma.petGender.create({
    data: {
      name: 'Fêmea',
      initials: 'F',
    },
  });

  const petSize = await prisma.petSize.create({
    data: {
      name: 'Médio',
    },
  });

  const petSpecie = await prisma.petSpecie.create({
    data: {
      name: 'Cachorro',
    },
  });

  const speciality = await prisma.specialities.create({
    data: {
      name: 'Cirurgoão',
    },
  });

  const commonUser = await prisma.user.create({
    data: {
      personName: 'John Doe',
      userName: 'johhnyDoe',
      cpf: '333.333.333-00',
      rg: '00.000.000-00',
      email: 'johndoe@gmail.com',
      password: 'password123',
      isVet: false,
      PhoneNumber: {
        create: {
          number: '+55 (11) 99999-9999',
        },
      },
      address: {
        create: {
          cep: '00000-000',
          number: '000',
          street: 'Wall Street',
          neighborhood: {
            create: {
              name: 'St. James',
              city: {
                create: {
                  name: 'City of Fire',
                  state: {
                    create: {
                      initials: 'FS',
                      name: 'Fire State',
                    },
                  },
                },
              },
            },
          },
        },
      },
      Pet: {
        create: {
          name: 'Patinho',
          birthDate: new Date(),
          photo:
            'https://images.unsplash.com/photo-1558322394-4d8813ceef8a?ixid=MnwyNTE2NnwwfDF8c2VhcmNofDIwfHxzdHJheSUyMGRvZ3xlbnwwfHx8fDE2NDQyNDgzOTM&ixlib=rb-1.2.1&q=85&w=2160',
          microship: false,
          petGenderId: 1,
          petSizeId: 1,
          petSpecieId: 1,
        },
      },
    },
  });

  const veterinary = await prisma.user.create({
    data: {
      personName: 'Alex Doe',
      userName: 'alexdoe',
      cpf: '000.000.000-00',
      rg: '00.000.000-00',
      email: 'alexdoe@gmail.com',
      password: 'password321',
      isVet: true,
      PhoneNumber: {
        create: {
          number: '+55 (21) 55555-5555',
        },
      },
      vetInfos: {
        create: {
          crmv: '1111',
          formation: 'That one',
          institution: 'Harvard',
          occupationArea: 'Clinic',
          AnimalTypesVetInfos: {
            create: {
              animalTypes: {
                create: {
                  name: 'Dog',
                },
              },
            },
          },
          VeterinaryEspecialities: {
            create: {
              specialitiesId: 1,
            },
          },
        },
      },
      address: {
        create: {
          cep: '00000-000',
          number: '000',
          street: 'Ground Street',
          neighborhood: {
            create: {
              name: 'St. Charles',
              city: {
                create: {
                  name: 'City of Ice',
                  state: {
                    create: {
                      initials: 'IS',
                      name: 'Ice State',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });

  console.log({
    commonUser,
    veterinary,
  });
}
main().catch(async (err) => {
  console.log(err);
});
