
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";
import { QrCode, Search, User, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

// Form schema validation
const formSchema = z.object({
  identifier: z.string().min(4, {
    message: "Identifier must be at least 4 characters.",
  }),
});

const VerifyForm = () => {
  const { toast } = useToast();
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const [isVerifying, setIsVerifying] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      identifier: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsVerifying(true);
    
    // Simulating API call to verify identity
    setTimeout(() => {
      // Mock data response
      if (values.identifier.toLowerCase() === "did:camer:123456" || values.identifier === "123456") {
        setVerificationResult({
          status: "verified",
          name: "Jean Pierre Mbarga",
          dateOfBirth: "1985-07-12",
          nationality: "Cameroonian",
          region: "Centre",
          city: "Yaoundé",
          verificationLevel: "Advanced",
          lastVerified: "2025-04-20",
          did: "did:camer:2X9AMph8yvfD3LGSugjC7ZVpPLNUJ",
        });
        
        toast({
          title: "Verification Successful",
          description: "Identity has been successfully verified.",
        });
      } else {
        setVerificationResult({ status: "not_found" });
        
        toast({
          variant: "destructive",
          title: "Verification Failed",
          description: "No identity found with the provided identifier. Please check and try again.",
        });
      }
      
      setIsVerifying(false);
    }, 2000);
  };

  const resetVerification = () => {
    setVerificationResult(null);
    form.reset();
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 md:p-8">
      {!verificationResult ? (
        <>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Verify Identity</h2>
            <p className="text-gray-600">
              Enter a DID or verification code to authenticate an individual's identity on the CamerSSI platform.
            </p>
          </div>

          <Tabs defaultValue="did" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="did">Verify with DID</TabsTrigger>
              <TabsTrigger value="qr">Scan QR Code</TabsTrigger>
            </TabsList>
            
            <TabsContent value="did">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="identifier"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>DID or Verification Code</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input 
                              placeholder="Enter DID or verification code" 
                              {...field}
                              className="pl-10" 
                            />
                            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="bg-blue-50 p-4 rounded-md border border-blue-100">
                    <h4 className="font-medium text-blue-800 mb-1">For Testing</h4>
                    <p className="text-blue-700 text-sm">
                      Use "did:camer:123456" or "123456" as the identifier to see a successful verification.
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-cameroon-green hover:bg-cameroon-green/90"
                    disabled={isVerifying}
                  >
                    {isVerifying ? "Verifying..." : "Verify Identity"}
                  </Button>
                </form>
              </Form>
            </TabsContent>
            
            <TabsContent value="qr">
              <div className="text-center py-8">
                <div className="mb-6 mx-auto w-56 h-56 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
                  <QrCode className="h-20 w-20 text-gray-400" />
                </div>
                <p className="text-gray-600 mb-8">
                  Position the QR code in front of your camera to verify the identity.
                </p>
                <Button className="w-full bg-cameroon-green hover:bg-cameroon-green/90" disabled>
                  Start Camera (Coming Soon)
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </>
      ) : (
        <div className="animate-fade-in">
          {verificationResult.status === "verified" ? (
            <>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold">Identity Verified</h2>
                <div className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                  Verified
                </div>
              </div>

              <div className="mb-8 flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="h-20 w-20 bg-cameroon-green/10 rounded-full flex items-center justify-center">
                  <User className="h-10 w-10 text-cameroon-green" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{verificationResult.name}</h3>
                  <p className="text-gray-600 text-sm">
                    DID: {verificationResult.did}
                  </p>
                  <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                    <Calendar className="h-4 w-4" />
                    <span>Last verified: {verificationResult.lastVerified}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-md">
                      <div className="text-sm text-gray-500">Date of Birth</div>
                      <div>{verificationResult.dateOfBirth}</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-md">
                      <div className="text-sm text-gray-500">Nationality</div>
                      <div>{verificationResult.nationality}</div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-medium mb-3">Location</h3>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <div>{verificationResult.city}, {verificationResult.region}</div>
                      <div className="text-sm text-gray-500">Cameroon</div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-medium mb-3">Verification Status</h3>
                  <div className="bg-green-50 p-4 rounded-md border border-green-100">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium">Verification Level</div>
                      <div className="text-green-700 font-medium">{verificationResult.verificationLevel}</div>
                    </div>
                    <p className="text-green-700 text-sm">
                      This identity has been verified and is valid according to CamerSSI verification standards.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button 
                  onClick={resetVerification}
                  className="w-full bg-cameroon-green hover:bg-cameroon-green/90"
                >
                  Verify Another Identity
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="text-center py-8">
                <div className="mb-6 mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="h-8 w-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </div>
                <h2 className="text-xl font-bold mb-2">No Identity Found</h2>
                <p className="text-gray-600 mb-8">
                  We couldn't find an identity with the provided identifier. Please check the DID or verification code and try again.
                </p>
                <Button 
                  onClick={resetVerification}
                  className="w-full bg-cameroon-green hover:bg-cameroon-green/90"
                >
                  Try Again
                </Button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default VerifyForm;
