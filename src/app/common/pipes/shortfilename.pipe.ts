import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "shortfilename",
})
export class ShortfilenamePipe implements PipeTransform {
  public transform(filename: string, maxLength: number = 20): any {
    if (!filename) return filename;
    const ext = filename.match(/\..*$/);
    if (!ext) return filename;

    const shortFileName = filename.replace(ext[0], "").substr(0, 10);

    return filename.length > maxLength ? shortFileName + "..." + ext : filename;
  }
}
