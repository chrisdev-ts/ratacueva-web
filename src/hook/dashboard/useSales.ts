import { useQuery } from "@tanstack/react-query";
import { mockSalesData, Sale } from "@/libs/salesData";

export const useSales = () => {
  return useQuery({
    queryKey: ["sales"],
    queryFn: async (): Promise<Sale[]> => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      return mockSalesData;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
