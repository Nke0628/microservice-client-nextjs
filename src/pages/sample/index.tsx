import ChakuraButton from "@/components/atoms/ChakuraButton";
import { useQuery } from "urql";

export default function Page() {
  //   const queryTest = `
  //   query fetchMultiEvaluations {
  //     multiTerms(take: 5, orederBy: false) {
  //       id
  //       businessTermName
  //       multiTermStartDate
  //       multiTermEndDate
  //       isCurrentTerm
  //     }
  //   }
  // `;
  //   const [result] = useQuery({
  //     query: queryTest,
  //   });

  return (
    <div>
      <ChakuraButton>chakura button</ChakuraButton>
    </div>
  );
}
