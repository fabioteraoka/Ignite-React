import { useQuery } from 'react-query';

type User ={
    id: number;
    name: string;
    email: string;
    createdAt: string;
}

export async function getUsers():Promise<User[]> {
    const response = await fetch("/api/users");
        const data = await response.json();
    
        const users = data.users.map(user =>{
          return {
          id: user.id,
          name: user.name,
          email: user.email,
          createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR',{
            day: '2-digit',
            month: 'long',
            year: 'numeric'
          }),
          }
        })
    
        return users;
      }



export function useUsers() {
    return useQuery("users",getUsers, {
        staleTime: 10000
      });
}
