
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Camera, Upload } from "lucide-react";

// Form schema validation
const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  dateOfBirth: z.string().refine((val) => {
    const date = new Date(val);
    const now = new Date();
    return date < now && date > new Date(now.getFullYear() - 100, now.getMonth(), now.getDate());
  }, {
    message: "Please enter a valid date of birth.",
  }),
  nationalId: z.string().min(6, {
    message: "National ID number must be at least 6 characters.",
  }),
  phoneNumber: z.string().min(9, {
    message: "Phone number must be at least 9 digits.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  region: z.string({
    required_error: "Please select your region.",
  }),
  city: z.string().min(2, {
    message: "Please enter your city.",
  }),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
});

const RegisterForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [idCardFile, setIdCardFile] = useState<File | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      nationalId: "",
      phoneNumber: "",
      email: "",
      region: "",
      city: "",
      termsAccepted: false,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      if (!idCardFile || !photoFile) {
        toast({
          title: "Missing Files",
          description: "Please upload both your ID card and photo.",
          variant: "destructive",
        });
        return;
      }
      
      // Final submission
      console.log("Form values:", values);
      console.log("ID Card:", idCardFile);
      console.log("Photo:", photoFile);
      
      toast({
        title: "Registration Submitted!",
        description: "Your identity registration has been submitted successfully.",
      });
      
      // Redirect to success page
      setTimeout(() => {
        navigate("/register-success");
      }, 2000);
    }
  };

  const handleIdCardUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIdCardFile(e.target.files[0]);
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhotoFile(e.target.files[0]);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 border border-gray-100 max-w-3xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Register Your Digital Identity</h2>
          <div className="flex items-center text-sm text-gray-500">
            Step {step} of 2
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-cameroon-green h-2.5 rounded-full transition-all duration-300"
            style={{ width: step === 1 ? "50%" : "100%" }}
          ></div>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {step === 1 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your first name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your last name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="dateOfBirth"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date of Birth</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="nationalId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>National ID Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your National ID number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. 6XXXXXXXX" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="region"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Region</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your region" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="adamawa">Adamawa</SelectItem>
                          <SelectItem value="centre">Centre</SelectItem>
                          <SelectItem value="east">East</SelectItem>
                          <SelectItem value="far-north">Far North</SelectItem>
                          <SelectItem value="littoral">Littoral</SelectItem>
                          <SelectItem value="north">North</SelectItem>
                          <SelectItem value="northwest">Northwest</SelectItem>
                          <SelectItem value="south">South</SelectItem>
                          <SelectItem value="southwest">Southwest</SelectItem>
                          <SelectItem value="west">West</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your city" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="termsAccepted"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I accept the terms and conditions
                      </FormLabel>
                      <FormDescription>
                        By accepting, you agree to our <a href="#" className="text-cameroon-green hover:underline">privacy policy</a> and <a href="#" className="text-cameroon-green hover:underline">terms of service</a>.
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full bg-cameroon-green hover:bg-cameroon-green/90"
              >
                Continue
              </Button>
            </>
          )}

          {step === 2 && (
            <>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Upload Your Documents</h3>
                  <p className="text-gray-600 text-sm mb-6">
                    Please upload clear images of your ID card and a recent photo of yourself.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium">National ID Card (Both Sides)</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer relative">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleIdCardUpload}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <Upload className="mx-auto h-10 w-10 text-gray-400 mb-2" />
                        <p className="text-sm font-medium text-gray-700">
                          {idCardFile ? idCardFile.name : "Click to upload your ID card"}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 5MB</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium">Recent Photo</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer relative">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoUpload}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <Camera className="mx-auto h-10 w-10 text-gray-400 mb-2" />
                        <p className="text-sm font-medium text-gray-700">
                          {photoFile ? photoFile.name : "Click to upload your photo"}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">Passport-style, front facing</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="font-medium mb-2">Consent for Identity Verification</h4>
                    <p className="text-gray-600 text-sm">
                      By submitting this form, I consent to the creation of my digital identity on the CamerSSI platform. I understand that my information will be securely stored on a blockchain and will only be shared with my explicit consent.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button 
                    type="submit" 
                    className="flex-1 bg-cameroon-green hover:bg-cameroon-green/90"
                  >
                    Complete Registration
                  </Button>
                </div>
              </div>
            </>
          )}
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm;
