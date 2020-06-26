<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fo="http://www.w3.org/1999/XSL/Format"
xpath-default-namespace="http://www.w3.org/1999/xhtml">
 
<xsl:output method="xml" media-type="application/xhtml+xml" version="5.0"
cdata-section-elements="script template"
doctype-system="about:legacy-compat"
omit-xml-declaration="yes" indent="yes" />

<!-- Grundgerüst aufbauen -->

<xsl:template match="*|@*">
 <xsl:copy copy-namespaces="no">
  <xsl:apply-templates select="@*|node()" />
 </xsl:copy>
</xsl:template>

<!-- Custom-Tag-Sektor -->

<!--
<xsl:template match="*[name()='frame']">
 <xsl:element name="iframe">
  <xsl:attribute name="class">grid</xsl:attribute>
  <xsl:copy-of select="@*|node()" />
 </xsl:element>
</xsl:template>
-->

</xsl:stylesheet>