export function FormatFilter(file: Express.Multer.File, formats: string[]): boolean {
    return formats.includes(file.mimetype.split('/')[1]);
}