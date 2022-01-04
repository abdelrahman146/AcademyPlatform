export function SizeFilter(file: Express.Multer.File, size_limit: number): boolean {
    return file.size <= size_limit;
}