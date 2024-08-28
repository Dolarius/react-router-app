import { PersonType } from "../api/useGetPeople";

export const Person = ({ person }: { person: PersonType }) => {
  return (
    <div className="px-[16px] py-[8px] bg-[#1b1b1b] mx-[0] my-[16px] rounded-[20px]">
      <h3 className="mx-[0] my-[10px] text-[#ffff57]">{person.name}</h3>
      <p className="mx-[0] my-[6px] text-[#999]">Gender - {person.gender}</p>
      <p className="mx-[0] my-[6px] text-[#999]">
        Birth Year - {person.birth_year}
      </p>
    </div>
  );
};
