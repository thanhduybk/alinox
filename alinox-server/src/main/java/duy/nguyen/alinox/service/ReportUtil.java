package duy.nguyen.alinox.service;

import com.itextpdf.kernel.colors.DeviceGray;
import com.itextpdf.kernel.font.PdfFont;
import com.itextpdf.kernel.pdf.canvas.PdfCanvasConstants;
import com.itextpdf.layout.element.Cell;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.element.Text;
import com.itextpdf.layout.property.TextAlignment;

public class ReportUtil {
    final String headerTagStyles = "h1 {display: block;font-size: 2em;-webkit-margin-before: 0.67em;-webkit-margin-after: 0.67em;-webkit-margin-start: 0px;-webkit-margin-end: 0px;font-weight: bold;},"
            + "h2 {    display: block;font-size: 1.5em;-webkit-margin-before: 0.83em;-webkit-margin-after: 0.83em;-webkit-margin-start: 0px;-webkit-margin-end: 0px;font-weight: bold;},"
            + "h3 {    display: block;font-size: 1.17em;-webkit-margin-before: 1em;-webkit-margin-after: 1em;-webkit-margin-start: 0px;-webkit-margin-end: 0px;font-weight: bold;},"
            + "h4 {    display: block;-webkit-margin-before: 1.33em;-webkit-margin-after: 1.33em;-webkit-margin-start: 0px;-webkit-margin-end: 0px;font-weight: bold;},"
            + "h5 {    display: block;font-size: 0.83em;-webkit-margin-before: 1.67em;-webkit-margin-after: 1.67em;-webkit-margin-start: 0px;-webkit-margin-end: 0px;font-weight: bold;},"
            + "h6 {    display: block;font-size: 0.67em;-webkit-margin-before: 2.33em;-webkit-margin-after: 2.33em;-webkit-margin-start: 0px;-webkit-margin-end: 0px;font-weight: bold;}";


    public static Cell createCell(String content, int colspan, TextAlignment textAlignment) {
        Cell cell = new Cell(1, colspan).add(new Paragraph(content));
        cell.setTextAlignment(textAlignment);

        return cell;
    }

    public static Text makeBold(String content, PdfFont font) {
        return new Text(content)
                .setFont(font)
                .setTextRenderingMode(PdfCanvasConstants.TextRenderingMode.FILL_STROKE)
                .setStrokeWidth(0.5f)
                .setStrokeColor(DeviceGray.BLACK);
    }
}
