// Code generated by protoc-gen-volcengine-sdk
// source: getAuditFramesForAudit
// DO NOT EDIT!
<?php
require('../../vendor/autoload.php');

$client = Volc\Service\Vod\Vod::getInstance();
$client->setAccessKey('your ak');
$client->setSecretKey('your sk');

$request = new Volc\Service\Vod\Models\Request\VodGetAuditFramesForAuditRequest();
$request->setVid("your Vid");
$request->setStrategy("your Strategy");
$request->setMinNumberOfFrames("your MinNumberOfFrames");
$request->setMaxNumberOfFrames("your MaxNumberOfFrames");


$response = new Volc\Service\Vod\Models\Response\VodGetAuditFramesForAuditResponse();
try {
    $response = $client->getAuditFramesForAudit($request);
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