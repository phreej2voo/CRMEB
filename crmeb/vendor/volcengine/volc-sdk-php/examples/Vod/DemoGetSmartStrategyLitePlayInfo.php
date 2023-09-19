// Code generated by protoc-gen-volcengine-sdk
// source: getSmartStrategyLitePlayInfo
// DO NOT EDIT!
<?php
require('../../vendor/autoload.php');

$client = Volc\Service\Vod\Vod::getInstance();
$client->setAccessKey('your ak');
$client->setSecretKey('your sk');

$request = new Volc\Service\Vod\Models\Request\VodGetSmartStrategyLitePlayInfoRequest();
$request->setPlayUrl("your PlayUrl");
$request->setFormat("your Format");
$request->setCodec("your Codec");
$request->setDefinition("your Definition");
$request->setFileType("your FileType");
$request->setLogoType("your LogoType");
$request->setSsl("your Ssl");
$request->setNeedThumbs("your NeedThumbs");
$request->setNeedBarrageMask("your NeedBarrageMask");
$request->setUnionInfo("your UnionInfo");
$request->setHDRDefinition("your HDRDefinition");


$response = new Volc\Service\Vod\Models\Response\VodGetSmartStrategyLitePlayInfoResponse();
try {
    $response = $client->getSmartStrategyLitePlayInfo($request);
} catch (Exception $e) {
    echo $e, "\n";
} catch (Throwable $e) {
    echo $e, "\n";
}
if ($response != null && $response->getResponseMetadata() != null && $response->getResponseMetadata()->getError() != null) {
    echo $response->getResponseMetadata()->getError()->serializeToJsonString(), "\n";
} else {
    echo $response->serializeToJsonString(), "\n";
}