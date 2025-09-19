import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export interface IProps {
  totalPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function CustomPagination({
  totalPage,
  currentPage,
  setCurrentPage,
}: IProps) {
  return (
    <div>
      {totalPage > 1 && (
        <div className="flex justify-end mt-4">
          <Pagination>
            <PaginationContent>
              {/* Previous Button */}
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>

              {/* Page Numbers */}
              <div className="flex">
                {Array.from({ length: totalPage }, (_, index) => index + 1).map(
                  (page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        isActive={currentPage === page}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )}
              </div>

              {/* Next Button */}
              <PaginationItem>
                <PaginationNext
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  className={
                    currentPage === totalPage
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}
